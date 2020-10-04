import React from "react";
import styled from "styled-components"; // or import styled from '@emotion/styled'
import Layout, {
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter, 
  Root, 
  getInsetContainer, 
  getInsetSidebar, 
  getInsetAvoidingView,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container/Container";
import { Header } from "./header";
import { Footer } from "./footer";
import { useNavbarContent } from "./hook";
import ListItem from "./list-item";

import Icon from "@material-ui/icons/AcUnit"
import List from "@material-ui/core/List/List";
import Collapse from "@material-ui/core/Collapse/Collapse";

const MuiHeader = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const InsetContainer = getInsetContainer(styled)
const InsetSidebar = getInsetSidebar(styled)
const InsetAvoidingView = getInsetAvoidingView(styled)
const Content = getContent(styled)
const MuiFooter = getFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create("whatever_id")
    .registerConfig("xs", { position: "sticky", })
    .registerConfig("md", { position: "relative" });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", { width: "auto" })
    .registerPermanentConfig("md", {
      width: 256,
      collapsible: true,
      collapsedWidth: 64,
    });
});
scheme.configureInsetSidebar(builder => {
  builder
    .create("secondarySidebar", { anchor: 'right' })
    .registerFixedConfig('md', { width: 256 })
})

interface ISidebar { children: any }

const Sidebar = ({ children }: ISidebar) => {
  const { content, isLoading, isError } = useNavbarContent();
  console.log(content)
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <MuiHeader>
        <Toolbar>
          <SidebarTrigger sidebarId="unique_id" />
          <Header />
        </Toolbar>
      </MuiHeader>
      <DrawerSidebar sidebarId="unique_id">
        <SidebarContent>
          <List>
            {!isLoading
              ? !isError && content
                  ? content.map(c =>  <>
                                        <ListItem {...c} icon={<Icon />} nested={c.sub !== undefined} />
                                        {c.sub && <Collapse in={true} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                              {c.sub.map(s => <ListItem {...s} icon={<Icon />} />)}
                                            </List>
                                          </Collapse>
                                        }
                                      </>)
                  : <Typography>Fail to load menu content.</Typography>
              : <div style={{ backgroundColor: "lightgrey", height: "100%", width: "100%" }}>
                  <CircularProgress />
                </div>
            }
          </List>
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
      <Content>
        <InsetContainer
          rightSidebar={
            <InsetSidebar sidebarId="secondarySidebar">
              <Header />
            </InsetSidebar>
          }
        >{children}</InsetContainer>
      </Content>
      <MuiFooter>
        <Container>
          <InsetAvoidingView>
            <Footer />
          </InsetAvoidingView>
        </Container>
      </MuiFooter>
    </Root>
  );
};

export default Sidebar;