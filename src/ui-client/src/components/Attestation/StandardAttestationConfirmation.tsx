/* Copyright (c) 2022, UW Medicine Research IT, University of Washington
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
                        <p><span>ITM Leaf is self-service cohort discovery tool that enables federated querying across ITM partner sites. 
                            The tool provides aggregate counts only across one or multiple partner institutions.</span></p>
                        <h5 className="text-center">
                            <u>OBLIGATIONS OF ITM Leaf SYSTEM USER</u>
                        </h5>
                        <ol>
                            <li>
                                <strong>
                                    <u>Performance of Activities.</u>
                                </strong>
                                System User may access Leaf to perform queries returning counts to support multi-institutional cohort discovery. 
                                System user shall not use the cohort counts for business intelligence and should not use the tool to re-identify individual patients.
                            </li>                            
                            <li>
                                <strong>
                                    <u>Knowledge of Non-Compliance.</u>
                                </strong>
                                Any non-compliance by System User with this Agreement or with HIPAA or the HIPAA Regulations automatically will be considered a 
                                breach or violation of a material term of this Agreement if System User knew or reasonably should have known of such non-compliance 
                                and failed to immediately take reasonable steps to cure the non-compliance.
                            </li>
                            <span>If you determine that you need access to row level data for the conduct of research, please visit: https://chicagoitm.org/</span>
                        </ol>
                        <h5 className="text-center">System User Acknowledgement</h5>I am authorized to participate in research as specified by my institution’s 
                        IRB requirements, and I have the appropriate human subjects, HIPAA training, and other training as required by my institution.  By accepting 
                        this document, I acknowledge and agree to abide by the restrictions on the use and disclosure of the data viewed within the tool.
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