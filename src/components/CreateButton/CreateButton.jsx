import React, { useState } from "react";
import { Button } from "antd";

const CreateButton = ({ modal }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button style={{ marginBottom: "20px" }} onClick={() => setOpen(true)}>
        Добавить
      </Button>
      {modal(open, onClose)}
    </>
  );
};

export default CreateButton;
