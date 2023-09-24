export type SolanaMovies = {
  "version": "0.1.0",
  "name": "solana_movies",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "movieGif",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gifUrl",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "movieGif",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "gifUrl",
            "type": "string"
          }
        ]
      }
    }
  ];
  "metadata": {
    "address": "7EZkj1Y7frBDwRH5g72xqaYhLBRRH6b9vRkgLHSJA9bq"
  }
};

export const IDL: SolanaMovies = {
  "version": "0.1.0",
  "name": "solana_movies",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "movieGif",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gifUrl",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "movieGif",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "gifUrl",
            "type": "string"
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "7EZkj1Y7frBDwRH5g72xqaYhLBRRH6b9vRkgLHSJA9bq"
  }
};
