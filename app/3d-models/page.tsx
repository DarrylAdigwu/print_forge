import ModelsGrid from "@/app/components/ModelsGrid"
import type { ModelsPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"
import Form from "next/form"

export default async function Page({ searchParams }: ModelsPageProps) {
  const { search } = await searchParams;
  const models = await getModels()
  const filterModels = search ? models.filter((model) => {
    return model.description.toLowerCase().includes(search?.toLowerCase()) ||
      model.name.toLowerCase().includes(search?.toLowerCase())
  }) : models
  console.log(filterModels)
  return (
    <>
      <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
        type="text"
          name="search"
          id="search"
          placeholder="Search models"defaultValue={search}
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form>
      <ModelsGrid title="3D Models" models={filterModels} />
    </>
  )
}
