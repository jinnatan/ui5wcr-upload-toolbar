
import Test from './Test';

function App() {

  return <Test />;
  // return (
  //   <ObjectPage
  //     footerArea={
  //       <Bar
  //         className={'bar'}
  //         design={'FloatingFooter'}
  //         startContent={
  //           <FlexBox
  //             alignItems="Center"
  //             direction="Row"
  //             justifyContent="Start"
  //             wrap="Wrap"
  //           >
  //             <Title>env1</Title>

  //             <Label>Estimate: 3,565 CU / Month</Label>
  //             <Label>Entitlement: 3,566 CU / Month</Label>
  //             <Label>Difference: Surplus: 1 CU / Month</Label>
  //           </FlexBox>
  //         }
  //       />
  //     }
  //     headerArea={
  //       <ObjectPageHeader>
  //         <FlexBox
  //           wrap={FlexBoxWrap.Wrap}
  //           alignItems={FlexBoxAlignItems.Center}
  //         >
  //           <FlexBox direction={FlexBoxDirection.Column}>
  //             <Link>+33 6 4512 5158</Link>
  //             <Link href="mailto:ui5-webcomponents-react@sap.com">
  //               DeniseSmith@sap.com
  //             </Link>
  //             <Link href="https://github.com/SAP/ui5-webcomponents-react">
  //               https://github.com/SAP/ui5-webcomponents-react
  //             </Link>
  //           </FlexBox>
  //           <FlexBox
  //             direction={FlexBoxDirection.Column}
  //             style={{ padding: '10px' }}
  //           >
  //             <Label>San Jose</Label>
  //             <Label>California, USA</Label>
  //           </FlexBox>
  //         </FlexBox>
  //       </ObjectPageHeader>
  //     }
  //     titleArea={
  //       <ObjectPageTitle
  //         header="Denise Smith"
  //         subHeader="Senior UI Developer"
  //         actionsBar={
  //           <Toolbar design="Transparent">
  //             <ToolbarButton
  //               design={ButtonDesign.Emphasized}
  //               text="Primary Action"
  //             />
  //             <ToolbarButton design={ButtonDesign.Transparent} text="Action" />
  //           </Toolbar>
  //         }
  //         navigationBar={
  //           <Toolbar design="Transparent">
  //             <ToolbarButton
  //               icon={fullscreenIcon}
  //               design={ButtonDesign.Transparent}
  //             />
  //             <ToolbarButton
  //               icon={exitFSIcon}
  //               design={ButtonDesign.Transparent}
  //             />
  //             <ToolbarButton
  //               icon={declineIcon}
  //               design={ButtonDesign.Transparent}
  //             />
  //           </Toolbar>
  //         }
  //         breadcrumbs={
  //           <Breadcrumbs>
  //             <BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
  //             <BreadcrumbsItem>My Team</BreadcrumbsItem>
  //             <BreadcrumbsItem>Employee Details</BreadcrumbsItem>
  //           </Breadcrumbs>
  //         }
  //         expandedContent={
  //           <MessageStrip>
  //             Information (only visible if header content is expanded)
  //           </MessageStrip>
  //         }
  //         snappedContent={
  //           <MessageStrip>
  //             Information (only visible if header content is collapsed/snapped)
  //           </MessageStrip>
  //         }
  //       >
  //         <ObjectStatus state={ValueState.Positive}>employed</ObjectStatus>
  //       </ObjectPageTitle>
  //     }
  //   >
  //     <ObjectPageSection titleText="Goals" id="goals" aria-label="Goals">
  //       <Form layout="S1 M2 L3 XL3" labelSpan="S12 M12 L12 XL12">
  //         <FormItem
  //           labelContent={
  //             <Label showColon>
  //               Evangelize the UI framework across the company
  //             </Label>
  //           }
  //         >
  //           <Text>4 days overdue - Cascaded</Text>
  //         </FormItem>
  //         <FormItem
  //           labelContent={
  //             <Label showColon>
  //               Get trained in development management direction
  //             </Label>
  //           }
  //         >
  //           <Text>Due Nov, 21</Text>
  //         </FormItem>
  //         <FormItem
  //           labelContent={<Label showColon>Mentor junior developers</Label>}
  //         >
  //           <Text>Due Dec, 31 - Cascaded</Text>
  //         </FormItem>
  //       </Form>
  //     </ObjectPageSection>
  //     <ObjectPageSection
  //       titleText="Personal"
  //       id="personal"
  //       aria-label="Personal"
  //     >
  //       <ObjectPageSubSection
  //         titleText="Connect"
  //         id="personal-connect"
  //         aria-label="Connect"
  //         actions={
  //           <>
  //             <Button
  //               design={ButtonDesign.Emphasized}
  //               style={{ minWidth: '120px' }}
  //             >
  //               Custom Action
  //             </Button>
  //             <Button
  //               design={ButtonDesign.Transparent}
  //               icon="action-settings"
  //               tooltip="settings"
  //             />
  //             <Button
  //               design={ButtonDesign.Transparent}
  //               icon="download"
  //               tooltip="download"
  //             />
  //           </>
  //         }
  //       >
  //         <Form style={{ alignItems: 'baseline' }}>
  //           <FormGroup headerText="Phone Numbers">
  //             <FormItem labelContent={<Label showColon>Home</Label>}>
  //               <Text>+1 234-567-8901</Text>
  //               <Text>+1 234-567-5555</Text>
  //             </FormItem>
  //           </FormGroup>
  //           <FormGroup headerText="Social Accounts">
  //             <FormItem labelContent={<Label showColon>LinkedIn</Label>}>
  //               <Text>/DeniseSmith</Text>
  //             </FormItem>
  //             <FormItem labelContent={<Label showColon>Twitter</Label>}>
  //               <Text>@DeniseSmith</Text>
  //             </FormItem>
  //           </FormGroup>
  //           <FormGroup headerText="Addresses">
  //             <FormItem labelContent={<Label showColon>Home Address</Label>}>
  //               <Text>2096 Mission Street</Text>
  //             </FormItem>
  //             <FormItem labelContent={<Label showColon>Mailing Address</Label>}>
  //               <Text>PO Box 32114</Text>
  //             </FormItem>
  //           </FormGroup>
  //           <FormGroup headerText="Mailing Address">
  //             <FormItem labelContent={<Label showColon>Work</Label>}>
  //               <Text>DeniseSmith@sap.com</Text>
  //             </FormItem>
  //           </FormGroup>
  //         </Form>
  //       </ObjectPageSubSection>
  //       <ObjectPageSubSection
  //         titleText="Payment Information"
  //         id="personal-payment-information"
  //         aria-label="Payment Information"
  //       >
  //         <Form>
  //           <FormGroup headerText="Salary">
  //             <FormItem labelContent={<Label showColon>Bank Transfer</Label>}>
  //               <Text>Money Bank, Inc.</Text>
  //             </FormItem>
  //           </FormGroup>
  //           <FormGroup headerText="Payment method for Expenses">
  //             <FormItem
  //               labelContent={<Label showColon>Extra Travel Expenses</Label>}
  //             >
  //               <Text>Cash 100 USD</Text>
  //             </FormItem>
  //           </FormGroup>
  //         </Form>
  //       </ObjectPageSubSection>
  //     </ObjectPageSection>
  //     <ObjectPageSection
  //       titleText="Employment"
  //       id="employment"
  //       aria-label="Employment"
  //     >
  //       <ObjectPageSubSection
  //         titleText="Job Information"
  //         id="employment-job-information"
  //         aria-label="Job Information"
  //       >
  //         <Form>
  //           <FormItem
  //             labelContent={<Label showColon>Job Classification</Label>}
  //           >
  //             <FlexBox direction={FlexBoxDirection.Column}>
  //               <Text>Senior UI Developer</Text>
  //               <Label>(UIDEV-SR)</Label>
  //             </FlexBox>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Job Title</Label>}>
  //             <Text>Developer</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Employee Class</Label>}>
  //             <Text>Employee</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Manager</Label>}>
  //             <FlexBox direction={FlexBoxDirection.Column}>
  //               <Text>Dan Smith</Text>
  //               <Label>Development Manager</Label>
  //             </FlexBox>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Pay Grade</Label>}>
  //             <Text>Salary Grade 18 (GR-14)</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>FTE</Label>}>
  //             <Text>1</Text>
  //           </FormItem>
  //         </Form>
  //       </ObjectPageSubSection>
  //       <ObjectPageSubSection
  //         titleText="Employee Details"
  //         id="employment-employee-details"
  //         aria-label="Employee Details"
  //       >
  //         <Form>
  //           <FormItem labelContent={<Label showColon>Start Date</Label>}>
  //             <Text>Jan 01, 2018</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>End Date</Label>}>
  //             <Text>Dec 31, 9999</Text>
  //           </FormItem>
  //           <FormItem
  //             labelContent={<Label showColon>Payroll Start Date</Label>}
  //           >
  //             <Text>Jan 01, 2018</Text>
  //           </FormItem>
  //           <FormItem
  //             labelContent={<Label showColon>Benefits Start Date</Label>}
  //           >
  //             <Text>Jul 01, 2018</Text>
  //           </FormItem>
  //           <FormItem
  //             labelContent={<Label showColon>Company Car Eligibility</Label>}
  //           >
  //             <Text>Jan 01, 2021</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Equity Start Date</Label>}>
  //             <Text>Jul 01, 2018</Text>
  //           </FormItem>
  //         </Form>
  //       </ObjectPageSubSection>
  //       <ObjectPageSubSection
  //         titleText="Job Relationship"
  //         id="employment-job-relationship"
  //         aria-label="Job Relationship"
  //       >
  //         <Form>
  //           <FormItem labelContent={<Label showColon>Manager</Label>}>
  //             <Text>John Doe</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Scrum Master</Label>}>
  //             <Text>Michael Adams</Text>
  //           </FormItem>
  //           <FormItem labelContent={<Label showColon>Product Owner</Label>}>
  //             <Text>John Miller</Text>
  //           </FormItem>
  //         </Form>
  //       </ObjectPageSubSection>
  //     </ObjectPageSection>
  //     <ObjectPageSection id="section4" titleText="Section 4">
  //       <div style={{ background: 'lightblue', height: '300px' }} />
  //     </ObjectPageSection>
  //     <ObjectPageSection id="section5" titleText="Section 5">
  //       <div style={{ background: 'lightblue', height: '300px' }} />
  //     </ObjectPageSection>
  //     <ObjectPageSection id="section6" titleText="Section 6">
  //       <div style={{ background: 'lightblue', height: '300px' }} />
  //     </ObjectPageSection>
  //   </ObjectPage>
  // );
}

export default App;
