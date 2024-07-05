import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="relative bg-[url(https://img1.wsimg.com/isteam/ip/1d0c46d8-2d75-4e4e-bd23-ee4fcf586b00/Portable%20Signage%20shoe.JPG/:/cr=t:7.45%25,l:0%25,w:100%25,h:85.1%25/rs=w:600,h:300,cg:true)] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center text-white">
            <h1 className="text-3xl-regular font-extrabold sm:text-5xl">
              Understand Customer Flow.
              <strong className="font-extrabold text-3xl-regular sm:block">
                {" "}
                Increase Sales.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Create stunning 3D visuals that float in mid-air, grabbing
              attention and boosting engagement
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* Base */}

              <Button variant="secondary">Explore Ideas</Button>

              {/* Border */}

              <a
                className="inline-block rounded border border-grey-90 px-12 py-3 text-sm font-medium text-grey-90 hover:bg-grey-90 hover:text-white focus:outline-none focus:ring active:bg-grey-50"
                href="#"
              >
                Go to Stores
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
