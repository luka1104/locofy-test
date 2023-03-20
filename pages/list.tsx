import type { NextPage } from "next";
import { Autocomplete, TextField } from "@mui/material";
import styles from "./list.module.css";

const List: NextPage = () => {
  return (
    <div className={styles.list}>
      <Autocomplete
        sx={{ width: 347 }}
        disablePortal
        options={["Singapore - Changi (LAX)"]}
        renderInput={(params: any) => (
          <TextField
            {...params}
            color="primary"
            label="Singapore - Changi (LAX)"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
        size="medium"
      />
      <div className={styles.menuItem}>
        <div className={styles.option}>
          Ninoy Aquiono International Airport (NAIA
        </div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.option}>Mactan International Airport (MIA)</div>
      </div>
      <div className={styles.menuitem}>
        <div className={styles.option}>Clark International Airport (CIA)</div>
      </div>
      <div className={styles.menuitem2}>
        <div className={styles.option}>Charles de Gaulle Airport (CGA)</div>
      </div>
    </div>
  );
};

export default List;
