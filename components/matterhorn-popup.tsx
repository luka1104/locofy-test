import type { NextPage } from "next";
import styles from "./matterhorn-popup.module.css";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: NextPage<MatterhornPopupType> = ({ onClose }) => {
  return (
    <div className={styles.matterhornPopup}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
