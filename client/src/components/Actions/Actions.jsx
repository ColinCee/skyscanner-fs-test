import React from "react";
import BpkText from "bpk-component-text";
import PriceAlertsIcon from "bpk-component-icon/lg/price-alerts";
import styles from "./Actions.scss";

const Actions = () => {
  return (
    <div className={styles.container}>
      <div>
        <BpkText className={styles.filter}>Filter</BpkText>
        <BpkText className={styles.sort}>Sort</BpkText>
      </div>
      <div className={styles.alertContainer}>
        <PriceAlertsIcon className={styles.priceAlertsIcon} />
        <BpkText className={styles.price}>Price alerts</BpkText>
      </div>
    </div>
  );
};

export default Actions;
