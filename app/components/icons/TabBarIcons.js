import React from "react";
import { Colors } from "../../constants";
import Messages from "../../assets/images/tabBar/icon_messages.svg";
import ActiveMessages from "../../assets/images/tabBar/icon_messages_active.svg";
import Profile from "../../assets/images/tabBar/icon_profile.svg";
import ActiveProfile from "../../assets/images/tabBar/icon_profile_active.svg";
import Wallet from "../../assets/images/tabBar/icon_wallet.svg";
import ActiveWallet from "../../assets/images/tabBar/icon_wallet_active.svg";
import Bids from "../../assets/images/tabBar/icon_bids.svg";
import ActiveBids from "../../assets/images/tabBar/icon_bids_active.svg";

const getIcon = ({ color }, Inactive, Active) => {
  const Icon = color == Colors.primaryColor ? Active : Inactive;
  return <Icon width={24} height={24} />;
};

export const MessagesIcon = props => getIcon(props, Messages, ActiveMessages);
export const ProfileIcon = props => getIcon(props, Profile, ActiveProfile);
export const WalletIcon = props => getIcon(props, Wallet, ActiveWallet);
export const BidsIcon = props => getIcon(props, Bids, ActiveBids);
