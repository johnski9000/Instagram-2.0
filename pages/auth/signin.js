import { getProviders, signIn as signIntoProvider } from "next-auth/react"
import Header from "../../components/Header"

export default function SignIn({ providers }) {
  return (
    <>
        <Header/>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2880px-Instagram_logo.svg.png" 
            alt="logo"
            className="w-80"
            />
            <p className="font-xs italic">This is not a Real app, it is for portfolio porposes only!</p>
            <div className="mt-40">
              {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                  <button 
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() => signIntoProvider(provider.id, {callbackUrl: "/"})}>
                      Sign in with {provider.name}
                  </button>
                  </div>
              ))}
            </div>
        </div>
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}