/* Copyright (c) 2020, UW Medicine Research IT, University of Washington
 * Developed by Nic Dobbins and Cliff Spital, CRIO Sean Mooney
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */ 

import React from 'react';
import { Button } from 'reactstrap';
import { SessionType } from '../../models/Session'
import { AppConfig } from '../../models/Auth';

interface Props {
    config?: AppConfig;
    className: string;
    handleGoBackClick: () => void;
    handleIAgreeClick: () => void;
    hasAttested: boolean;
    isIdentified: boolean;
    isSubmittingAttestation: boolean;
    show: boolean;
    sessionLoadDisplay: string;
    sessionType: SessionType;
}

export default class StandardAttestationConfirmation extends React.PureComponent<Props> {
    public render() {
        const c = this.props.className;
        const { show, handleGoBackClick, handleIAgreeClick, isIdentified, sessionType, sessionLoadDisplay, hasAttested, isSubmittingAttestation, config } = this.props;
        const confirmationClass = `${c}-confirmation-container ${show ? 'show' : ''}`
        const useDisplay = sessionType === SessionType.Research ? 'Research' : 'Quality Improvement';
        const phiDisplay = isIdentified ? 'Identified' : 'Deidentified';
        const showText = config && config.attestation.enabled;

        return (
            <div className={confirmationClass}>
                {showText && [
                    <div className={`${c}-confirmation-settings`} key="1">
                        {useDisplay} - {phiDisplay}
                    </div>,
                    <p key="2">
                        <h5 className="text-center">
                            <u>OBLIGATIONS OF Leaf SYSTEM USER</u>
                        </h5>
                        <ol>
                            <li>
                                <strong>
                                    <u>Performance of Activities.</u>
                                </strong>
                                System User may access Leaf to view the minimum necessary data to conduct cohort
                                discovery. System User agrees to submit an official request for data through the
                                Analytics Core (
                                <a target="_blank" href="https://hub.uchospitals.edu/dept/dna/SitePages/ACRES.aspx">
                                    https://hub.uchospitals.edu/dept/dna/SitePages/ACRES.aspx
                                </a>
                                ) for data use or disclosure exceeding cohort discovery.
                            </li>
                            <li>
                                <strong>
                                    <u>Nondisclosure Except As Provided In Agreement.</u>
                                </strong>
                                System User shall not abstract, use, or further disclose the data except as permitted or
                                required by this Agreement or as described in an IRB approved protocol.
                            </li>
                            <li>
                                <strong>
                                    <u>Identification of Individual.</u>
                                </strong>
                                System User may not use the data to identify or contact any individual who is the
                                subject of the PHI from which the data was created without a signed HIPAA Authorization
                                from the individual.
                            </li>
                            <li>
                                <strong>
                                    <u>Reporting.</u>
                                </strong>
                                System User shall report to the HIPAA Program Office at 773-864-9716 within twenty-four
                                (24) hours of System User becoming aware of any use or disclosure of the data in
                                violation of this Agreement or applicable law.
                            </li>
                            <li>
                                <strong>
                                    <u>Knowledge of Non-Compliance.</u>
                                </strong>
                                Any non-compliance by System User with this Agreement or with HIPAA or the HIPAA
                                Regulations automatically will be considered a breach or violation of a material term of
                                this Agreement if System User knew or reasonably should have known of such
                                non-compliance and failed to immediately take reasonable steps to cure the
                                non-compliance.
                            </li>
                        </ol>
                        <h5 className="text-center">System User Acknowledgement</h5>I am authorized to view the data
                        described in the Agreement for the purposes described in the Agreement. By accepting this
                        document, I acknowledge and agree to abide by the restrictions on the use and disclosure of the
                        data viewed in accordance with the Agreement.
                    </p>,
                ]}
                {!(isSubmittingAttestation || hasAttested) && (
                    <div className={`${c}-confirmation-footer`}>
                        {/*
                        <Button onClick={handleGoBackClick} tabIndex={-1} className="leaf-button mr-auto">
                            Go Back
                        </Button>
                        <Button
                            onClick={handleIAgreeClick}
                            tabIndex={-1}
                            className="leaf-button leaf-button-primary"
                            style={{ float: "right" }}
                        >
                            I Agree
                        </Button>
                        */}
                        <Button
                            onClick={handleIAgreeClick}
                            tabIndex={-1}
                            className="leaf-button leaf-button-primary"
                        >
                            I Agree
                        </Button>
                    </div>
                )}
                {(isSubmittingAttestation || hasAttested) && (
                    <div className={`${c}-session-load-display-container`}>
                        <div className={`${c}-session-load-display`}>
                            <span>...{sessionLoadDisplay}</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}