import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <Header />,

    <main>
      <h2 className="title">About <span>Me</span></h2>
          <h1>{`I'm Rudi`}</h1>
          <p className="abt-txt">
            {`I'm 22 years old.`} A web developer focused on front-end, at the beginning of my career and looking to evolve more.
            Graduated in I.T Management.
            Currently living in São Paulo, SP - Brazil.
            <Link href="https://heartdevs.com" target="_blank"><span className="h">He4rt Developers Member.</span></Link>
          </p>
    </main>,

    <Footer />
  );
};


