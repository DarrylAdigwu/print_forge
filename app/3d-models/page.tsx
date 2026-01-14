import { getAllModels } from "@/app/lib/models"
import { Model } from "../types"

export default async function ModelPage() {
    let modelsList = await getAllModels();
    const modelNames = modelsList.map((model: Model) => {
      return (
        <div key={model.id}>
            {model.name}
        </div>
      )
    })
  return(
    <>
    {modelNames}
    </>
  )
}