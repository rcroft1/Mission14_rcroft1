using Microsoft.AspNetCore.Mvc;
using Mission13_rcroft1_backend.Data;

namespace Mission13_rcroft1_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var x = context.Movies.ToArray();

            return context.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title).ToArray();
        }
    }
}
