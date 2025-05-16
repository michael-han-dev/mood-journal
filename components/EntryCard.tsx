const EntryCard = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()
    return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">
        summary: {entry.analysis?.summary || "No summary available"}
      </div>
      <div className="px-4 py-4">
        mood: {entry.analysis?.mood || "No mood available"}
      </div>
    </div>
  )
}

export default EntryCard