using Microsoft.EntityFrameworkCore;

namespace Mission13_rcroft1_backend.Data
{
    public class MoviesDbContext : DbContext
    {
        public MoviesDbContext (DbContextOptions<MoviesDbContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }
    }
}
