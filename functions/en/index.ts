const tapinpackEndpointUrl ='https://hook.eu1.make.com/9u4e7y5td1f0243m9w1fc92flbqijeyt'

export async function onRequestPost(context) {
    // Contents of context object
    const {
        request, // same as existing Worker API
        env, // same as existing Worker API
        params, // if filename includes [id] or [[path]]
        waitUntil, // same as ctx.waitUntil in existing Worker API
        next, // used for middleware or to fetch assets
        data, // arbitrary space for passing data between middlewares
    } = context;

    return await fetch(
        tapinpackEndpointUrl,
        {
            method: "POST",
            body: await request.formData(),
        }
    );
}
