
import FCLLayout from '@ui5/webcomponents-fiori/dist/types/FCLLayout.js';
import { Bar, Breadcrumbs, BreadcrumbsItem, Button, DatePicker, DynamicPage, DynamicPageHeader, DynamicPageTitle, FileUploader, FlexBox, FlexibleColumnLayout, Input, Label, MessageStrip, ObjectStatus, Switch, Tag, Title, ToolbarButton } from '@ui5/webcomponents-react';
import { Toolbar } from '@ui5/webcomponents-react-compat/dist/components/Toolbar/index.js';

function App() {

  const layoutColumn = FCLLayout.TwoColumnsMidExpanded;

  const exportButton = () => {
    return (
      // <ToolbarButton
      //   design="Emphasized"
      //   text="Export"
      // ></ToolbarButton>

      <Button
        design="Emphasized"
      >Export</Button>
    );
  };

  const resetButton = () => {
    return (
      // <ToolbarButton
      //   design="Transparent"
      //   text="Reset to default"
      // ></ToolbarButton>

      <Button
        design="Emphasized"
      >Reset to default </Button>
    );
  };

  const uploadButton = () => {
    // return (
    //   <FileUploader
    //     hideInput
    //     valueState="None"
    //     accept=".json"
    //   >
    //     <ToolbarButton design="Default" text="Import Json File"></ToolbarButton>
    //   </FileUploader>
    // );

    return (
      <FileUploader
        hideInput
        valueState="None"
        accept=".json"
      >
        <Button design="Default" >Import Json File</Button>
      </FileUploader>
    );
  };

  const displayStartColumn = () => {
    return (
      <DynamicPage
        footerArea={
          <Bar
            design="FloatingFooter"
            endContent={
              <>
                <Button design="Positive">Accept</Button>
                <Button design="Negative">Reject</Button>
              </>
            }
          />
        }
        headerArea={
          <DynamicPageHeader>
            <FlexBox wrap="Wrap">
              <FlexBox direction="Column">
                <Label>Location: Warehouse A</Label>
                <Label>Halway: 23L</Label>
                <Label>Rack: 34</Label>
              </FlexBox>
              <span style={{ width: '1rem' }} />
              <FlexBox direction="Column">
                <Label>Availability:</Label>
                <ObjectStatus state="Positive">In Stock</ObjectStatus>
              </FlexBox>
            </FlexBox>
          </DynamicPageHeader>
        }
        onPinButtonToggle={function Xs() { }}
        onTitleToggle={function Xs() { }}
        style={{
          height: '600px',
        }}
        titleArea={
          <DynamicPageTitle
            actionsBar={
              <Toolbar design="Transparent">
                {exportButton()}
                {uploadButton()}
                {resetButton()}
              </Toolbar>
            }
            breadcrumbs={
              <Breadcrumbs>
                <BreadcrumbsItem>Home</BreadcrumbsItem>
                <BreadcrumbsItem>Page 1</BreadcrumbsItem>
                <BreadcrumbsItem>Page 2</BreadcrumbsItem>
                <BreadcrumbsItem>Page 3</BreadcrumbsItem>
                <BreadcrumbsItem>Page 4</BreadcrumbsItem>
                <BreadcrumbsItem>Page 5</BreadcrumbsItem>
              </Breadcrumbs>

            }
            heading={
              <Title
                style={{ fontSize: 'var(--sapObjectHeader_Title_FontSize)' }}
              >
                Header Title
              </Title>
            }
            navigationBar={
              <Toolbar design="Transparent">
                <ToolbarButton design="Transparent" icon="full-screen" />
                <ToolbarButton design="Transparent" icon="exit-full-screen" />
                <ToolbarButton design="Transparent" icon="decline" />
              </Toolbar>
            }
            snappedHeading={
              <Title
                style={{
                  fontSize: 'var(--sapObjectHeader_Title_SnappedFontSize)',
                }}
              >
                Snapped Header Title
              </Title>
            }
            snappedSubheading={
              <>
                <Label>Snapped Subheader</Label>
                <MessageStrip>
                  Information (only visible if header content is collapsed
                  (snapped))
                </MessageStrip>
              </>
            }
            subheading={
              <>
                <Label>Subheader</Label>
                <MessageStrip>
                  Information (only visible if header content is expanded)
                </MessageStrip>
              </>
            }
          >
            <Tag>Status: OK</Tag>
          </DynamicPageTitle>
        }
      ></DynamicPage>
    );
  };

  const displayMiddleColumn = () => {
    return <></>;
  };

  const displayToolbar = () => {
    return (

      <Toolbar
        design="Auto"
        onClick={function Xs() { }}
        onOverflowChange={function Xs() { }}
        toolbarStyle="Standard"
      >

        <Button
          data-accessible-name
          design="Transparent"
        >
          Button One
        </Button>
        <Button
          data-accessible-name
          design="Transparent"
        >
          Button two
        </Button>
        <Button
          data-accessible-name
          design="Transparent"
        >
          Button three
        </Button>
        <Button
          data-accessible-name
          design="Transparent"
        >
          Button four
        </Button>
        <Button
          data-accessible-name
          design="Transparent"
        >
          Button Two
        </Button>
        <Input data-accessible-name />
        <DatePicker data-accessible-name />
        <Switch data-accessible-name />
      </Toolbar>
    )
  }

  return (
    <FlexibleColumnLayout
      layout={layoutColumn}
      startColumn={displayStartColumn()}
      midColumn={displayMiddleColumn()}
      style={{ height: '95%' }}
    ></FlexibleColumnLayout>
  );

}

export default App;
