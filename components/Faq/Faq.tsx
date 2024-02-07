import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "./Faq.module.scss";
import { Accordion } from "../Accordion";

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let element = ref.current;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <section className={styles.Section} ref={ref} id="faq">
      <h1 className={styles.Title}>FAQ</h1>
      <div className={styles.Container}>
        <div className={styles.Box}>
          <Accordion title="How can I mint ePassport?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="Where can i view my NFT's?">
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion title="What are the features of ePassport">
            The amount of royalties was fixed at 5% to finance the Weirdos
            Club's projects. We have the ambition to organize multiple events
            around the world in order to strengthen the community and build a
            network of entrepreneurs and investors with the same mindset and
            common interests.
          </Accordion>
          <Accordion title="How much does it cost to get ePassport">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim
            veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem,
            maxime, similique neque minus aliquam dolore doloremque laboriosam,
            facilis quibusdam unde sint officia.
          </Accordion>
        </div>
        <div className={styles.Box}>
          <Accordion title="What are stamps and how to get them?">
            You will be able to use your NFT as an avatar in the Metaverse and
            our future video game. Holding also means that you are part of an
            exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title="What are the rewards and benefits?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
          <Accordion title="What can i do with my NFT after purchase?">
            You can share it, gift it or place it for sale directly from the
            wallet on to the markteplace. There you can see what your NFT is
            worth at the moment.
          </Accordion>
          <Accordion title="How can I contact with you?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim
            veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem,
            maxime, similique neque minus aliquam dolore doloremque laboriosam,
            facilis quibusdam unde sint officia.
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
