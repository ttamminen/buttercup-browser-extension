import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { NonIdealState } from "@blueprintjs/core";
import Entries from "../../shared/components/Entries.js";

const BUTTERCUP_LOGO = require("../../../resources/buttercup-standalone.png");

const Container = styled.div`
    flex: 1;
`;

const EntryShape = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string
});

class SearchResults extends PureComponent {
    static propTypes = {
        entries: PropTypes.arrayOf(EntryShape),
        sourcesUnlocked: PropTypes.number.isRequired,
        onSelectEntry: PropTypes.func.isRequired
    };

    render() {
        return (
            <Container>
                <Choose>
                    <When condition={this.props.entries.length > 0}>
                        <Entries
                            autoLoginEnabled={false}
                            entries={this.props.entries}
                            onSelectEntry={this.props.onSelectEntry}
                            sourcesUnlocked={this.props.sourcesUnlocked}
                        />
                    </When>
                    <Otherwise>
                        <NonIdealState
                            title="Welcome to Buttercup"
                            description="Use the search bar to find entries in your unlocked vaults."
                            icon={<img src={BUTTERCUP_LOGO} width="64" />}
                        />
                    </Otherwise>
                </Choose>
            </Container>
        );
    }
}

export default SearchResults;
