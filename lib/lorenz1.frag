uniform sampler2D texture;

const float dx = 1./1080.; // change to gemwin dim
uniform float K1;
uniform float K2;

void main (void)
{
    vec2 tmp = (gl_TextureMatrix[0] * gl_TexCoord[0]).st;

	float x = tmp.s;
	float y = tmp.t;

	vec4 color;
	vec4 color0;
	color = texture2D(texture, vec2(x, y));
	color0 = texture2D(texture, vec2(x-dx, y-dx));
	color0 += texture2D(texture, vec2(x, y-dx));
	color0 += texture2D(texture, vec2(x+dx, y-dx));
	color0 += texture2D(texture, vec2(x-dx, y));
	color0 += texture2D(texture, vec2(x+dx, y));
	color0 += texture2D(texture, vec2(x-dx, y+dx));
	color0 += texture2D(texture, vec2(x, y+dx));
	color0 += texture2D(texture, vec2(x+dx, y+dx));

	color.rgb = vec3(step((2.5-color0.r)*K1,color.r)*step(color.r,3.5*K2));
	color.a = 1.0;
	gl_FragColor = color;
}