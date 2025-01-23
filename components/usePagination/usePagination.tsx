"use client";
import { useEffect, useState, useMemo } from "react";
import { Product } from "@/components/types/typeProduct";

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
    if (typeof window === "undefined") return 1;
    const savedPage = localStorage.getItem(storageKey);
    return savedPage ? Math.max(1, parseInt(savedPage, 10)) : 1;
  });

  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, currentPage.toString());
    }
  }, [currentPage, storageKey]);

  const currentItems = useMemo(
    () =>
      items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [currentPage, items, itemsPerPage]
  );

  const paginationArray = useMemo(() => {
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
  }, [currentPage, totalPages]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    paginationArray,
  };
}
