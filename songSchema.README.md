const songSchema = new Schema(
    {
        title: String,
        artist: String,
        album: String,
        time: Number,
        url: String
    },
    {timestamps: true}
)