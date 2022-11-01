import { GetStaticPropsContext } from "next";

const HelpUs = () => {
  return <h1 className="text-center">help us</h1>
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/${locale}.json`)).default
    }
  };
}

export default HelpUs
