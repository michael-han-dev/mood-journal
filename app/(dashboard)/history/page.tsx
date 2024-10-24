import HistoryChart from "@/components/HistoryChart";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getData = async () => {
  const user = await getUserFromClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userID: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },

  });

  const sum = analyses.reduce((all, current) => all + current.sentimentScore, 0);
  const average = Math.round(sum / analyses.length);
  return {analyses, average}

}

const History = async () => {
  const {average, analyses} = await getData();

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="mb-4">{`Avg. Sentiment ${average}`}</div>
    <div className="flex-grow w-full">
      <HistoryChart data={analyses} />
    </div>
    </div>
  );
};

export default History