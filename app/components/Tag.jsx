import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Tag(props) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date(); // Get the current date
  const month = date.getMonth(); 
  return (
    <div
      className={`${inter.className} flex items-center absolute bottom-12 left-12 lg:left-24 gap-x-12 lg:gap-x-24 text-xs`}
    >
      {props.bg == "not" ? (
        <>
          <h1 className="text-neutral-200">wearware / ai</h1>
          <h1 className="text-neutral-200 hidden lg:block">Reviews / Mobile Strategy</h1>
          <h1 className="text-white/55">{monthNames[month]} {new Date().getFullYear()}</h1>
          <h1 className="text-white/55">{props.page}</h1>
        </>
      ) : (
        <>
          <h1 className="text-neutral-900">wearware / ai</h1>
          <h1 className="text-neutral-900 hidden lg:block">Reviews / Mobile Strategy</h1>
          <h1 className="text-neutral-900/55">
            {monthNames[month]} {new Date().getFullYear()}
          </h1>
          <h1 className="text-neutral-900/55">{props.page}</h1>
        </>
      )}
    </div>
  )
}
