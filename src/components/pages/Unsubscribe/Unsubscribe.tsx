import { Container } from "@radix-ui/themes";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, "">;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Unsubscribe = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container py="9">
      <Button
        variant="contained"
        size="large"
        color="error"
        onClick={() => setIsOpenModal(true)}
      >
        CANCEL
      </Button>

      {isOpenModal && (
        <Dialog
          open={isOpenModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setIsOpenModal(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ width: "50%" }}>{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              If you press 'Yes', you will be unsubscribed. Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsOpenModal(false)}>No</Button>
            <Button onClick={() => setIsOpenModal(false)}>Yes</Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default Unsubscribe;
