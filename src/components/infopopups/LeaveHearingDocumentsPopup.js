import React, { Component }from 'react';
import Help from './common/Help';
import {
    FILE_MULTIPLES_STEP_TWO_MSG,
    FILE_ONLINE_ONE_MSG,
    FILE_STEP_ONE_MSG,
    FILE_STEP_THREE_MSG,
    FILE_STEP_TWO_MSG
} from "../../helpers/constants";

class LeaveHearingDocumentsPopup extends Component {

    constructor(props) {
        super(props);
        let NoticeOfMotion = [
            {
                line: FILE_ONLINE_ONE_MSG,
                rows: [
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.1-how-do-you-start-an-appeal?ct=t(step-index-link)",
                            URLName: "Notice of Motion"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%203.doc",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/fillable_forms/civil_rules_forms/Form3.pdf",
                            URLName: "PDF"
                        }

                    },
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.1-how-do-you-start-an-appeal?ct=t(step-index-link)",
                            URLName: "Motion Book"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%204.doc",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%204.pdf",
                            URLName: "PDF"
                        }
                    }
                ]
            },
            FILE_MULTIPLES_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
        ];

        this.sections = [{
            expandable: false,
            expanded: true,
            sectionHeading: "Notice of Motion and Motion Book",
            iconSrc: "/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrases: [{
                startWith: "You have ",
                deadline: " 30 days ",
                endWith: " to file the documents below after filing your Notice of Application for Leave to Appeal. "
            },{
                startWith: " Serve a filed copy on each respondent ",
                deadline: "at least 10 business days",
                endWith: "before the hearing. "
            }],
            last: false,
            contentMap: NoticeOfMotion
        }]
    }

    render() {

        let sections = this.props.getSections(this.sections);
        return (
            <div id="info-modal" className="modal" style={{display: 'block'}} >
                <div className="info-modal-title ">
                    <span id="close-modal" onClick={this.props.close}>&times;</span>
                    Hearing Documents
                </div>
                <div className="info-modal-content">
                    {sections}
                    <Help
                        URL="https://www.courtofappealbc.ca/appellant-guidebook"
                        URLName="Visit: SRL Guidebook"
                    />
                </div>

            </div>
        );
    }
}
export default LeaveHearingDocumentsPopup;