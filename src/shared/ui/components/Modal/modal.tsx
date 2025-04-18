import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import { TAppTheme, useAppTheme } from "shared/lib/theme";

import { ModalActions } from "./modal-action";
import { modalContext } from "./modal-context";
import { ModalTitle } from "./modal-title";

type TModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const ModalComponent = ({ children, onClose }: TModalProps) => {
  const { theme } = useAppTheme();
  const themeStyles = getThemeStyles(theme);

  return (
    <>
      <StatusBar style="light" />
      <modalContext.Provider value={{ onClose }}>
        <View style={styles.modalWrapper}>
          <View style={[styles.background, themeStyles.background]} />
          <View style={[styles.modal, themeStyles.modal]}>{children}</View>
        </View>
      </modalContext.Provider>
    </>
  );
};

ModalComponent.Title = ModalTitle;
ModalComponent.Actions = ModalActions;

export const Modal = ModalComponent;

const getThemeStyles = (theme: TAppTheme) =>
  StyleSheet.create({
    background: {
      backgroundColor: theme.colors.accent,
    },
    modal: {
      backgroundColor: theme.colors.primary,
    },
  });

const styles = StyleSheet.create({
  modalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    height: "100%",
    width: "100%",
    opacity: 0.5,
  },
  modal: {
    position: "absolute",
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    gap: 10,
  },
});
