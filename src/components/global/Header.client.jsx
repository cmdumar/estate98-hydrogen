import {Link, useUrl, Image} from '@shopify/hydrogen';
import {useWindowScroll} from 'react-use';

import {
  Heading,
  IconAccount,
  IconMenu,
  IconSearch,
  IconCartBag,
  Input,
} from '~/components';

import {CartDrawer} from './CartDrawer.client';
import {MenuDrawer} from './MenuDrawer.client';
import {useDrawer} from './Drawer.client';

/**
 * A client component that specifies the content of the header on the website
 */
export function Header({title, menu}) {
  const {pathname} = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      <DesktopHeader
        countryCode={countryCode}
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      />
      <MobileHeader
        countryCode={countryCode}
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      />
    </>
  );
}

function MobileHeader({countryCode, title, isHome, openCart, openMenu}) {
  const {y} = useWindowScroll();

  const styles = {
    button: 'relative flex items-center justify-center w-8 h-8',
    container: `${
      isHome
        ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
        : 'bg-contrast/80 text-primary'
    } ${
      y > 50 && !isHome ? 'shadow-lightHeader ' : ''
    }flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`,
  };

  return (
    <header role="banner" className={styles.container}>
      <div className="flex items-center justify-start w-full gap-4">
        <button onClick={openMenu} className={styles.button}>
          <IconMenu />
        </button>
        <form
          action={`/${countryCode ? countryCode + '/' : ''}search`}
          className="items-center gap-2 sm:flex"
        >
          <button type="submit" className={styles.button}>
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </form>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Heading className="font-bold text-center" as={isHome ? 'h1' : 'h2'}>
          {title}
        </Heading>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <Link to={'/account'} className={styles.button}>
          <IconAccount />
        </Link>
        <button onClick={openCart} className={styles.button}>
          <div className="border-2 rounded-full p-4">
            <IconCartBag fill="none" viewBox="0 0 24 24" />
          </div>
        </button>
      </div>
    </header>
  );
}

function DesktopHeader({isHome, menu, openCart}) {
  const {y} = useWindowScroll();

  const styles = {
    button:
      'relative flex items-center justify-center mr-2 rounded-full bg-[rgba(151,49,34,0.8)] p-4',
    container: `${
      isHome
        ? 'bg-transparent text-contrast dark:text-primary'
        : 'bg-transparent text-contrast'
    } ${
      y > 50 && !isHome ? 'shadow-lightHeader ' : ''
    }hidden h-nav lg:flex items-center transition duration-300 z-40 top-0 justify-center w-full leading-none gap-8 px-10`,
  };

  return (
    <header role="banner" className={styles.container}>
      <div className="flex justify-center w-full items-center mt-10">
        <Link className="font-bold mr-auto" to="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0712/2793/2978/files/estate98-logo.png?v=1675426429"
            alt="Logo"
            width={180}
            height={100}
            className="max-w-full"
          />
        </Link>
        <nav className="flex gap-8">
          {/* Top level menu items */}
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              className="text-black text-2xl uppercase font-alternate"
              to={item.to}
              target={item.target}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 ml-auto">
          <button onClick={openCart} className={styles.button}>
            <IconCartBag fill="none" viewBox="0 0 24 24" />
          </button>
          <p className="font-alternate uppercase text-2xl border-b-2 border-b-[#B59357]">
            Returning customers
          </p>
        </div>
      </div>
    </header>
  );
}
