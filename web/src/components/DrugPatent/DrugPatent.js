import { useState } from 'react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Card from 'src/components/Card'

import SaveButton from '../SaveButton/SaveButton'

const DrugPatent = ({ drug }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Card>
        <div className="flex flex-row justify-between">
          <div className="font-bold text-lg">{drug.brandName}</div>
          <SaveButton
            saved={drug?.SavedDrug[0]?.id ? true : false}
            drugId={drug.id}
            savedId={drug?.SavedDrug[0]?.id}
          />
        </div>

        <div className="text-xs text-gray-500 col-span-2">
          Medicinal Ingredient
        </div>
        <div className="col-span-2">{drug.medicinalIngredient}</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">Dose</div>
            <div>{drug.strengthPerUnit}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">Route</div>
            <div>{drug.routeOfAdmin}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">Human/Vet</div>
            <div>{drug.humanOrVet}</div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-xs text-gray-500 col-span-2">
              Patent Holder
            </div>
            <div className="col-span-2">{drug?.Patent[0]?.companyName}</div>
            {drug.Patent[0] && (
              <a
                href={`https://www.ic.gc.ca/opic-cipo/cpd/eng/patent/${drug.Patent[0].patentNum}/summary.html?type=number_search&tabs1Index=tabs1_1`}
                className="underline text-blue-500"
              >
                {drug.Patent[0].patentNum}{' '}
              </a>
            )}
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-gray-500">Expiration Date</div>
            <div>
              {new Date(drug?.Patent[0]?.expirationDate).toLocaleDateString()}
            </div>
          </div>
        </div>

        {drug.therapeuticClass ? (
          <>
            <button
              className="flex flex-row mx-auto text-xs text-center text-gray-500 mt-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              Therapeutic Class
              {!isOpen && <ChevronRightIcon className="w-4 h-4" />}
              {isOpen && <ChevronDownIcon className="w-4 h-4" />}
            </button>
            {isOpen && (
              <div className="text-center col-span-9">
                {drug.therapeuticClass}
              </div>
            )}
          </>
        ) : (
          <div className="h-6" />
        )}
      </Card>
    </>
  )
}

export default DrugPatent
