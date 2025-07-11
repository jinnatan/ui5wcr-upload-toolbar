
import FCLLayout from '@ui5/webcomponents-fiori/dist/types/FCLLayout.js';
import { Bar, Breadcrumbs, BreadcrumbsItem, Button, DynamicPage, DynamicPageHeader, DynamicPageTitle, FileUploader, FlexBox, FlexibleColumnLayout, Label, MessageStrip, ObjectStatus, Tag, Title, Toolbar, ToolbarButton } from '@ui5/webcomponents-react';

function App() {

  const layoutColumn = FCLLayout.TwoColumnsMidExpanded;

  const exportButton = () => {
    return (
      <ToolbarButton
        design="Emphasized"
        //   onClick={onExport}
        text="Export"
      ></ToolbarButton>
    );
  };

  const resetButton = () => {
    return (
      <ToolbarButton
        design="Transparent"
        // onClick={onReset}
        text="Reset to default"
      ></ToolbarButton>
    );
  };

  const uploadButton = () => {
    return (
      <FileUploader
        hideInput
        // onChange={handleFileChange}
        valueState="None"
        accept=".json"
      >
        <ToolbarButton design="Default" text="Import Json File"></ToolbarButton>
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
