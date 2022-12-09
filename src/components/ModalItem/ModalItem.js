import React, { useEffect } from "react";
import { Button, Form, Input, Modal, Radio, Select, notification } from "antd";
import styles from "./CreateRieltor.module.scss";
import apiInstance from "../../api/index.js";
import { useMutation } from "react-query";

const CreateRieltor = ({
  isOpen,
  onClose,
  onCreate,
  onUpdate,
  title,
  children,
  onDelete,
  initialData = null,
  form,
}) => {
  const isEditMode = !!initialData;

  const deleteItem = () => {
    onDelete(initialData.id);
  };

  useEffect(() => {
    form.setFieldsValue(initialData);
  }, [initialData]);

  return (
    <Modal
      footer={null}
      title={title}
      open={isOpen}
      onCancel={onClose}
      destroyOnClose={true}
    >
      <Form
        form={form}
        id="form"
        name="control-hooks"
        onFinish={isEditMode ? onUpdate : onCreate}
        labelCol={{ span: 8 }}
        layout="horizontal"
      >
        {children}

        <div className={styles.buttons}>
          {initialData && (
            <Button danger onClick={deleteItem}>
              Удалить
            </Button>
          )}
          <Button htmlType="submit">
            {!isEditMode ? "Добавить" : "Обновить"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CreateRieltor;
