const CONFIGS = {
    5: {
        // goerli
        networkName: "goerli",
        resolverAddress: "0x3710AB3fDE2B61736B8BB0CE845D6c61F667a78E",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-goerli",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-goerli",
        subgraphFeatureEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-feature-goerli"
    },
    100: {
        // xdai
        networkName: "xdai",
        resolverAddress: "0xD2009765189164b495c110D61e4D301729079911",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-xdai",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-xdai",
    },
    137: {
        // matic
        networkName: "matic",
        resolverAddress: "0xE0cc76334405EE8b39213E620587d815967af39C",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-matic",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-matic",
        subgraphFeatureEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-feature-matic"
    },

    80001: {
        // (matic) mumbai testnet
        networkName: "mumbai",
        resolverAddress: "0x8C54C83FbDe3C59e59dd6E324531FB93d4F504d3",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-mumbai",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai",
    },
    0x03c401: {
        // (artis) tau1 testnet
        networkName: "artis",
        resolverAddress: "0x79D426CD219eDCFEB2dCbcf7ea0F8B3642C56F47"
    },
    42161: {
        // arbitrum (one)
        networkName: "arbitrum-one",
        resolverAddress: "0x609b9d9d6Ee9C3200745A79B9d3398DBd63d509F",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-arbitrum-one",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-one",
    },
    421611: {
        // arbitrum (goerli)
        networkName: "arbitrum-goerli",
        resolverAddress: "0x21d4E9fbB9DB742E6ef4f29d189a7C18B0b59136",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-arbitrum-goerli",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-arbitrum-goerli",
    },
    43114: {
        // avalanche (mainnet)
        networkName: "avalanche-c",
        resolverAddress: "0x24a3F04F70B7f07B9673EadD3e146391BcfEa5c1",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-avalanche-c",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-c",
    },
    43113: {
        // avalanche (fuji)
        networkName: "avalanche-fuji",
        resolverAddress: "0x141920741bC45b962B59c833cd849bA617F7ef38",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-avalanche-fuji",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-avalanche-fuji",
    },
    10: {
        // optimism (mainnet)
        networkName: "optimism-mainnet",
        resolverAddress: "0x743B5f46BC86caF41bE4956d9275721E0531B186",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-optimism-mainnet",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-mainnet",
    },
    69: {
        // optimism (goerli)
        networkName: "optimism-goerli",
        resolverAddress: "0x21d4E9fbB9DB742E6ef4f29d189a7C18B0b59136",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-optimism-goerli",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-optimism-goerli",
    },
    56: {
        // bsc (mainnet)
        networkName: "bsc-mainnet",
        resolverAddress: "0x218B65780615Ff134f9Ad810CB98839534D3C0D6",
        subgraphDevEndpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-dev-bsc-mainnet",
        subgraphV1Endpoint: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-bsc-mainnet",
    },
};
