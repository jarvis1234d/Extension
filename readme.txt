since the url_encoded_fmt_stream_map thing is not working.
I can use the embed api to get the video.
first get the page url by using 'window.location.href'
extract the video id from it.
add the video id in this url 'https://www.youtube.com/embed/VIDEOID?vq=hd1080'
Code for 1440: vq=hd1440
Code for 1080: vq=hd1080
Code for 720: vq=hd720
Code for 480p: vq=large
Code for 360p: vq=medium
Code for 240p: vq=small
resolution can be altered using the vq argument.




"https://www.youtube.com/embed/" + op2[0] + "?vq=hd1080"

id = menu

class = style-scope yt-icon-button

http://dl87.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ0puZDBveGgwaVN1WUhpb0k1MHErQklzTUVCYVlEaHMvMU1wVi85Q3pNZU52QWRWaXEvYXNuVUhMS3NvRWU4Zy9kK3BvaFZJSTBBVFd6ditleGhUbDNoMHpIZjg3TUdmTVRPbFF3Z2s1MzBqU1M4OW50akFYV21WZUlpMGltVTNWYTZtc2JjL2pBcGRsTzNHWE9VT2ZseDVoWTZIUzUrNVZjenVXZnNVU2s1Yjh1N0prbmVFY3hJYlpFaTVmMHkvV0Nwa2dVeTlSWDEwaXN1K09yQjZFNUU3T2JSalp4TkIwQzZPUFFWeG9NMnl3VngzKy81SzRhL25JQVphRjQxMmExNitIaFp6R25iTVBnVHAyN0srYXBwOWY0M2RGWWlsSHZqTW5pc0o5bHFWbjNFSmp2Q053WTVRa2dyYXFHNjlnZjhndnJpbHhVMDdsZGlocXNJZ0pzRnNBTkptOGZMdDRTRXljVnJwQ3p2UDlzcnNzVk94K3lwYThuS3VrcjlRPT0%3D