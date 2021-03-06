# noodle-dynamo-dump

A neat little tool to dump out the contents of a table in Dynamo!

## Usage

To use this tool, run the following:

```
npm install -g noodle-dynamo-dump
```

Then run the following:

```
dynamo-dump
```

Or if you'd rather not install the tool on your machine, simply run:

```
npx noodle-dynamo-dump
```

And answer the following questions:

- Which table would you like to dump?
- What is your access key ID?
- What is your secret access key?
- Which region does your Dynamo table belong to?
- What format would you like to see the data in?

Once done, you should see the content of your table printed in the console!

Note: Your credentials will never be stored by this tool.

Note: I'd advise against running this against large databases, as this will cost you quite a bit! Also this hasn't been tested on responses that pull more than 1MB of data (at which point the API response in Dynamo starts paginating, which I have not accommodated for in this tool)
