import { Text, clx } from "@medusajs/ui"
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai"

import { getCategoriesList, getCollectionsList } from "@lib/data"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-5 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              HoloScreen.lk
            </LocalizedClientLink>
          </div>
          <div className="text-medium-regular gap-5 md:gap-x-16 grid grid-cols-1 sm:grid-cols-3">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-base-plus txt-ui-fg-base">Products</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-base",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-base-plus txt-ui-fg-base">Social</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-base">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <AiFillInstagram className="mr-2 mt-1" />
                      Instagram
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <AiFillFacebook className="mr-2 mt-1" />
                      Facebook
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <AiFillYoutube className="mr-2 mt-1" />
                      Youtube
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="txt-base-plus txt-ui-fg-base">Contact Us</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-base">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <IoLocationSharp className="mr-2 mt-1" />
                      5/3B Temple Road, <br /> Ampitiya, Kandy
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94762248365"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <FaPhoneAlt className="mr-2 mt-1" />
                      076 2248 365
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <IoLogoWhatsapp className="mr-2 mt-1" />
                      +94 76 2248 365
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@holoscreen.lk"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    <span className="flex">
                      <MdEmail className="mr-2 mt-1" />
                      Info@holoscreen.lk
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} holoscreen.lk. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
