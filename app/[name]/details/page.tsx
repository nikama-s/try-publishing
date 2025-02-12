import Main from "./components/main";

interface Params {
  name: string;
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const product = resolvedParams.name;
  const id = product.split("-")[1];
  return <Main id={id} />;
}
