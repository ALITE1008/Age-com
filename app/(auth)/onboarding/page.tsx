import AccountProfile from "@/components/forms/AccountProfile"

function page() {
  return (
    <main className=" mx-auto flex max-w-3xl flex-col justify-start px-20 py-20">
      <h1 className=" head-text">onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete you profile Now To Use Age-com
      </p>
      <section className="mt-9 bg-dark-2 p-10 ">
      <AccountProfile/>
      </section>
    </main>
  )
}

export default page
