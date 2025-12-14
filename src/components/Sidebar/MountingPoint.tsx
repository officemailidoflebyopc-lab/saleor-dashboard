import sideBarDefaultLogoDarkMode from "@assets/images/sidebar-deafult-logo-darkMode.png";
import sideBarDefaultLogo from "@assets/images/sidebar-default-logo.png";
import { useLegacyThemeHandler } from "@dashboard/components/Sidebar/user/Controls";
import { Avatar, Box, Text } from "@saleor/macaw-ui-next";

export const MountingPoint = () => {
  const { theme } = useLegacyThemeHandler();
  const logo = "https://static.wixstatic.com/media/28cd35_fc07dc978e294088911b1755e1cc078f~mv2.avif/v1/fill/w_192,h_246,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lebyopc_logo_avif.avif";

  return (
    <Box display="flex" gap={3} paddingX={4} paddingY={5} alignItems="center">
      <Avatar.Store src={logo} scheme="accent1" size="small" />
      <Text size={3} fontWeight="bold">
        Lebyopc Dashboard
      </Text>
    </Box>
  );
};
