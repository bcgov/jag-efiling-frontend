import React, { Component } from 'react';
import Help from "./common/Help";
import {
    FILE_MULTIPLES_STEP_TWO_MSG,
    FILE_STEP_ONE_MSG,
    FILE_STEP_THREE_MSG
} from "../../helpers/constants";

class ReplyBookPopup extends Component {

    constructor(props) {
        super(props);

        let contentMap = [
            {
                line: FILE_STEP_ONE_MSG,
                rows: [
                    { descriptionLink: {
                        URL: "https://www.courtofappealbc.ca/respondent-guidebook/1.5-if-the-appellant-applies-for-leave-to-appeal?ct=t(sidebar-link)",
                        URLName: "Reply Book" }, times: "4 x",
                        docLink:
                            {
                                URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%205.doc",
                                URLName: "DOC"
                            },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%205.pdf",
                            URLName: "PDF"
                        }
                    },
                ]
            },
            FILE_MULTIPLES_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
        ];

        this.sections = [{
            expandable: false,
            expanded: true,
            sectionHeading: "Were you served with a Notice of Motion for Leave to Appeal and a Motion Book? ",
            iconSrc: "/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrases: [{
                startWith: "File and then serve a Reply Book ",
                deadline: " at least 5 days ",
                endWith: " before the hearing."
            }],
            lineHeight: null,
            contentMap: contentMap
        }]
    }

    render () {
        return  (
            <div id="info-modal" className="modal" style={{display: 'block'}} >
                <div className="info-modal-title ">
                    <span id="close-modal" onClick={this.props.close}>&times;</span>
                    Hearing Documents: Reply Book
                </div>
                <div className="info-modal-content">
                    {this.props.getSections(this.sections)}
                    <Help
                        URL="https://www.courtofappealbc.ca/respondent-guidebook"
                        URLName="Visit: SRL Guidebook"
                    />
                </div>
            </div>
        );
    }

} export default ReplyBookPopup;