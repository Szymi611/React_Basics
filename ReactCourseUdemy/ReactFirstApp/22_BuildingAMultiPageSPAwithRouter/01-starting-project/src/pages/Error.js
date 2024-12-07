import MainNavigation from "../components/MainNavigation";

function Error(){
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Page not found!</h1>
        <p>Could not found such a page</p>
      </main>
    </>
  )
}

export default Error;