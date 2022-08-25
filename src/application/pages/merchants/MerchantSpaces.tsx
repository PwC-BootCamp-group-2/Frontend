import { FC, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import SpaceModal from "../../components/merchants/spaceModal/SpaceModal";
import styles from "../../utils/css/merchants/MerchantSpaces.module.css";

const MerchantSpaces: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.Container}>
      {showModal && <SpaceModal sState={setShowModal} />}
      <div className={styles.Container_Header}>
        <h3>Spaces</h3>
        {/* Add the usercomponents */}
      </div>
      <div className={styles.Container_body}>
        <div className={styles.Container_body_addSpace}>
          <button
            className={styles.Container_body_addSpace_action}
            onClick={() => setShowModal(true)}
          >
            Add Space <BiAddToQueue />
          </button>
        </div>
        <div className={styles.Container_body_myspaces}>
          <h3>My Spaces</h3>
          <div className={styles.Container_body_myspaces_spaces}>
            <p className={styles.Container_body_myspaces_spaces_null}>
              Please Add A product to display here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSpaces;
