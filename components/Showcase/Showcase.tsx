import React, { useRef } from "react";
import styles from "./Showcase.module.scss";
import Image from "next/image";

const NftItem = ({
  img,
  number = 0,
  price = 0,
  passRef,
}: {
  img: string;
  number: number;
  price: number;
  passRef: any;
}) => {
  let play = (e: any) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e: any) => {
    passRef.current.style.animationPlayState = "paused";
  };
  return (
    <div
      className={styles.ImgContainer}
      onMouseOver={(e) => pause(e)}
      onMouseOut={(e) => play(e)}
    >
      <img src={img} alt="ePassport showcase image" />
      <div className={styles.Details}>
        <div>
          <span>ePassport</span> <br />
          <h1>#{number} </h1>
        </div>
        <div>
          <span>Price</span>
          <div className={styles.Price}>
            <Image
              src="/assets/icons8-ethereum-48.png"
              alt="Eth symbol"
              width={100}
              height={100}
            />
            <h1>{Number(price).toFixed(1)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <section className={styles.Section} id="showcase">
      <div className={styles.Row} ref={Row1Ref}>
        <NftItem
          img="/assets/Nfts/Group 13.svg"
          number={654}
          price={1.5}
          passRef={Row1Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 14.svg"
          number={154}
          price={1}
          passRef={Row1Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 15.svg"
          number={244}
          price={2.5}
          passRef={Row1Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 16.svg"
          number={354}
          price={2.5}
          passRef={Row1Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 17.svg"
          number={454}
          price={2.5}
          passRef={Row1Ref}
        />
      </div>
      <div className={styles.InvRow} ref={Row2Ref}>
        <NftItem
          img="/assets/Nfts/Group 18.svg"
          number={654}
          price={1}
          passRef={Row2Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 19.svg"
          number={555}
          price={1.5}
          passRef={Row2Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 20.svg"
          number={254}
          price={4.5}
          passRef={Row2Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 21.svg"
          number={222}
          price={4.5}
          passRef={Row2Ref}
        />
        <NftItem
          img="/assets/Nfts/Group 12.svg"
          number={444}
          price={1.5}
          passRef={Row2Ref}
        />
      </div>
    </section>
  );
};

export default Showcase;
