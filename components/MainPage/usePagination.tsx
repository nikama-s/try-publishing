"use client";
import { useEffect, useState } from "react";
import { Product } from "../typeProduct";

interface PaginationHook {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  currentItems: Product[];
  paginationArray: (number | string)[];
}

export default function usePagination(
  items: Product[],
  itemsPerPage: number,
  storageKey: string = "currentPage"
): PaginationHook {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    let savedPage;
    if (typeof window !== "undefined")
      savedPage = localStorage?.getItem(storageKey);
    else savedPage = null;
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [totalPages, currentPage]);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const createPaginationArray = () => {
    const result: (number | string)[] = [1];
    if (currentPage > 3) result.push("...");

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(currentPage + 1, totalPages - 1);
      i++
    ) {
      result.push(i);
    }

    if (currentPage < totalPages - 2) result.push("...");
    if (totalPages > 1) result.push(totalPages);
    return result;
  };

  const paginationArray = createPaginationArray();

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    paginationArray,
  };
}
