using InternsFeedback.Models;
using System.Threading.Tasks;

namespace InternsFeedback.ServiceContract
{
    public interface IAuthService
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExist(string username);
    }
}
