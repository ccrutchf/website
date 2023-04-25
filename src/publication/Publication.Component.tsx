import React from "react";

import PublicationModel from "./Publication.Model";

class Publication extends React.Component<PublicationModel> {
    private getAuthorElements() {
        let authors = this.props.authors.map(
            a => {
                if (a === "Christopher L. Crutchfield") {
                    return <strong>{a}</strong>;
                } else {
                    return a;
                }
            }
        );

        if (authors.length > 1) {
            authors = authors.map(
                (a, idx) => {
                    if (idx < authors.length - 1) {
                        return <span>{a}, </span>;
                    } else {
                        return <span>and {a},</span>;
                    }
                }
            )
        }

        return authors;
    }

    private getVolumeIssueArticleElements() {
        let volumeIssueArticle: JSX.Element[] = [];
        if (typeof this.props.volume !== 'undefined') {
            volumeIssueArticle.push(
                <span>Volume {this.props.volume}, </span>
            );
        }
        if (typeof this.props.issue !== 'undefined') {
            volumeIssueArticle.push(
                <span>Issue {this.props.issue}, </span>
            );
        }
        if (typeof this.props.article !== 'undefined') {
            volumeIssueArticle.push(
                <span>Article {this.props.article}, </span>
            );
        }

        return volumeIssueArticle;
    }
    private getMonthName(month: number){
        const d = new Date();
        d.setMonth(month-1);
        const monthName = d.toLocaleString("default", {month: "long"});
        return monthName;
    }

    private getDateElements() {
        const monthName = this.getMonthName(this.props.month);

        return <span>{monthName} {this.props.year}</span>
    }

    private getJournalElement() {
        if (typeof this.props.journal !== "undefined") {
            return <span>{this.props.journal}, </span>;
        } else {
            return null;
        }
    }

    private getConferenceElement() {
        if (typeof this.props.conference !== "undefined") {
            return <em>{this.props.conference}, </em>;
        } else {
            return null;
        }
    }

    render(): React.ReactNode {
        const authors = this.getAuthorElements();
        const title = <span>"<a href={this.props.titleHref}>{this.props.title}</a>", </span>;
        const journal = this.getJournalElement();
        const conference = this.getConferenceElement();
        const volumeIssueArticle = this.getVolumeIssueArticleElements();
        const date = this.getDateElements();

        return (
            <p>
                {authors} {title} {journal} {conference} {volumeIssueArticle} {date}
            </p>
        );
    }
}

export default Publication;