local headers = {
    ["Authorization"] = "Bearer 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"
}

print()
get("input").on_input(function(content)

    local response = fetch({
        url = "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
        method = "GET",
        headers = headers,
        body = '{ "inputs": ' .. content .. '}'
    })
    print(response)
    get("p").set_content(responce)
end)