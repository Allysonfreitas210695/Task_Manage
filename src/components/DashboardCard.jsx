const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="flex w-1/4 flex-col items-center rounded-lg bg-white px-[52px] py-10 shadow-md">
      <div className="mb-1 flex items-center gap-2">
        {icon}{" "}
        <span className="text-brand-dark-blue text-3xl font-semibold">
          {value}
        </span>
      </div>
      <h2 className="font-regular mb-2 text-center text-[16px]">{title}</h2>
    </div>
  )
}

export default DashboardCard
