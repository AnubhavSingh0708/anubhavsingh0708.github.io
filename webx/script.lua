local headers = {
    ["Authorization"] = "Bearer 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"
}

function query(messages)
    local response = fetch({
        url = "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
        method = "GET",
        headers = headers,
        body = '{ "inputs": ' .. messages .. '}'
    })
end

print()
get("input").on_submit(function(content)
    print(query(content))
end)