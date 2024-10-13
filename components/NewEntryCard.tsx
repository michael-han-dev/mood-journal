'use client'

import { createNewEntry } from "@/utils/api"
import { useRouter } from "next/navigation"

const NewEntryCard = () => {
    const router = useRouter()

    const handleOnClick = async () => {
      try {
          const data = await createNewEntry();
  
          if (data && data.entry && data.entry.id) {
              router.push(`/journal/${data.entry.id}`);
          } else {
              console.error('Entry ID not found in the response:', data);
          }
      } catch (error) {
          console.error('Error creating new entry:', error);
      }
  };
  

    return (
        <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
          <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
            <span className="text-3xl">New Entry</span>
          </div>
        </div>
      )
}

export default NewEntryCard