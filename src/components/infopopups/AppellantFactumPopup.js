import React, { Component }from 'react';
import Help from './common/Help';
import {
    FILE_STEP_THREE_MSG,
    FILE_MULTIPLES_STEP_TWO_MSG,
    FILE_STEP_ONE_MSG
} from "../../helpers/constants";

class AppellantFactumPopup extends Component {

    constructor(props) {
        super(props);
        let factumDocList = [
            {
                line: FILE_STEP_ONE_MSG,
                rows: [
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.7-write-your-factum?ct=t(step-index-link)",
                            URLName: "Factum"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/CA12345_factum_appellant_Final.dotx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/CA12345_factum_appellant_respondent_Final.pdf",
                            URLName: "PDF"
                        }
                    },
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.9-preparing-the-transcript-extract-book?ct=t(step-index-link)",
                            URLName: "* Optional - Transcript Extract Book" }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form13.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2013.pdf",
                            URLName: "PDF"
                        }
                    },
                    { descriptionLink : {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.6-put-together-your-appeal-book?ct=t(step-index-link)",
                            URLName: "Appeal Book"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2012.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2012.pdf",
                            URLName: "PDF"
                        }
                    },
                    { descriptionLink : {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.11-prepare-and-file-a-certificate-of-readiness?ct=t(sidebar-link)",
                            URLName: "Certificate of Readiness"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2014.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2014.pdf",
                            URLName: "PDF"
                        }
                    },
                ]
            },
            FILE_MULTIPLES_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
        ];

        let respondentFactumDocList = [
            {
                line: FILE_STEP_ONE_MSG,
                rows: [
                    { descriptionLink: {
                            URL: "https://www.courtofappealbc.ca/appellant-guidebook/2.8-replies?ct=t(sidebar-link)",
                            URLName: "Reply"
                        }, times: "4 x",
                        docLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2011.docx",
                            URLName: "DOC"
                        },
                        pdfLink: {
                            URL: "http://www.courts.gov.bc.ca/Court_of_Appeal/practice_and_procedure/Forms/Form%2011.pdf",
                            URLName: "PDF"
                        }
                    }
                ]
            },
            FILE_MULTIPLES_STEP_TWO_MSG,
            FILE_STEP_THREE_MSG
         ];



        this.sections = [{
            expandable: true,
            sectionHeading: "Complete the Factum, Appeal Book, and Certificate of Readiness",
            iconSrc: "/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrases: [{
                startWith: "You have ",
                deadline: "  30 days ",
                endWith: " to file and serve your documents after filing your Appeal Record."
            }],
            lineHeight: '311px',
            expanded: true,
            contentMap: factumDocList
        }, {
            expandable: true,
            sectionHeading: "Were you served with a respondent's Factum?",
            iconSrc :"/icons/icon-share.svg",
            iconClass: "info-modal-icon",
            deadlinePhrases: [{startWith: "You have ", deadline:" 7 days ", endWith: " to file and serve your documents."}],
            lineHeight: '206px',
            contentMap: respondentFactumDocList
        }, {
            expandable: true,
            sectionHeading: "Were you served with a respondent's Transcript Extract Book or Appeal Book?",
            iconSrc: "/icons/icon-info.svg",
            iconClass: "info-modal-icon",
            deadline: null,
            lineHeight: null,
            VLProps: null,
            content: ["If you are served with a copy of the respondent's Transcript Extract Book or Appeal Book, you do not have to respond.  " +
                "These documents are for your awareness only."]
        }]
    }

    render() {

        let sections = this.props.getSections(this.sections);
        return (
            <div id="info-modal" className="modal" style={{display: 'block'}} >
                <div className="info-modal-title ">
                    <span id="close-modal" onClick={this.props.close}>&times;</span>
                    The Factum and Appeal Book
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
export default AppellantFactumPopup;