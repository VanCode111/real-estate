import { useMutation, useQueryClient } from "react-query";
import { notification } from "antd";

export const useMutationExtended = ({ apiHandler, success, key }) => {
  const queryClient = useQueryClient();

  return useMutation(apiHandler, {
    onSuccess: () => {
      notification.success({ message: "Success" });

      if (key) {
        queryClient.invalidateQueries(key);
      }

      success();
    },
    onError: (e) => {
      notification.error({ message: e.response?.data?.errors || e.message });
    },
  });
};
